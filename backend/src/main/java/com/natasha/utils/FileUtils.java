package com.natasha.utils;

import org.apache.commons.io.IOUtils;
import org.jboss.resteasy.plugins.providers.multipart.InputPart;
import org.jboss.resteasy.plugins.providers.multipart.MultipartFormDataInput;

import javax.ws.rs.core.MultivaluedMap;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;

public class FileUtils {

    public static String uploadFile(MultipartFormDataInput file) {

        Map<String, List<InputPart>> uploadForm = file.getFormDataMap();

        List<InputPart> inputParts = uploadForm.get("attachment");

        for (InputPart part : inputParts) {
            try {
                MultivaluedMap<String, String> header = part.getHeaders();
                String filename = getFileName(header);

                // Convert uploaded file to bytes
                byte[] filebytes = createFileBytes(part);

                String mainResourcePath = "/src/main/resources/uploads";

                String resourcePath = System.getProperty("RESOURCE_PATH") == null ? mainResourcePath : System.getProperty("RESOURCE_PATH");
                File customDir = fileCreator(resourcePath);

                if (!customDir.exists()) {
                    customDir.mkdir();
                }

                filename = customDir.getCanonicalPath() + File.separator + filename;
                writeFile(filebytes, filename);

                return filename;

            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return null;
    }

    public static File fileCreator(String resourcesPath) {

        Path currentDir = Paths.get("");
        String path = currentDir.toAbsolutePath() + resourcesPath;
        File customDir = new File(path);

        return customDir;

    }

    public static byte[] createFileBytes(InputPart part) throws IOException {

        InputStream inputStream = part.getBody(InputStream.class, null);
        byte[] filebytes = IOUtils.toByteArray(inputStream);

        return filebytes;
    }

    public static String getFileName(MultivaluedMap<String, String> header) {

        String[] contentDisposition = header.getFirst("Content-Disposition").split(";");

        for (String filename : contentDisposition) {

            if ((filename.trim().startsWith("filename"))) {

                String[] name = filename.split("=");
                String finalFileName = name[1].trim().replaceAll("\"", "");
                return finalFileName;
            }
        }
        return "unknown";
    }

    public static void writeFile(byte[] content, String filename) throws IOException {
        File file = new File(filename);

        if (!file.exists()) {
            file.createNewFile();
        }
        FileOutputStream fop = new FileOutputStream(file);
        fop.write(content);
        fop.flush();
        fop.close();
        System.out.println("Written: " + filename);
    }
}
