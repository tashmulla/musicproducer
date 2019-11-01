package com.natasha.unit.upload;

import com.natasha.utils.FileUtils;
import org.jboss.resteasy.plugins.providers.multipart.MultipartFormDataInput;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.mock.web.MockMultipartFile;

import java.io.*;
import java.nio.file.Path;
import java.nio.file.Paths;

public class FileUploadTest {

    @Test
    public void FilePathTest() {

        String testResourcesPath = "/src/test/resources/uploads";

        Path currentDir = Paths.get("");
        String path = currentDir.toAbsolutePath() + testResourcesPath;
        File file = new File(path);

        Assert.assertEquals(path, file.toString());
    }

    @Test
    public void UploadTest() {

//        MockMultipartFile mockFile = new MockMultipartFile("data", "DATADATADATDATADATA".getBytes());
//        String filename = FileUtils.uploadFile((MultipartFormDataInput) mockFile);

//        System.out.println(filename);


    }
}
