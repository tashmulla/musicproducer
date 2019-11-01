package com.natasha.integration;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.junit.Assert;
import org.junit.Test;

import javax.ws.rs.core.MediaType;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.file.Path;
import java.nio.file.Paths;

public class RESTUploadTest extends BaseTest {

    @Test
    public void uploadIntegrationTest() throws URISyntaxException, IOException {

        URI uri = builder.setPath("/edits/upload").setPort(servicePort).build();
        HttpPost request = new HttpPost(uri);

        MultipartEntityBuilder builder = MultipartEntityBuilder.create();

        Path currentDir = Paths.get("");
        String path = currentDir.toAbsolutePath() + "/src/test/resources/files/test.txt";
        File f = new File(path);

        builder.addBinaryBody(
                "attachment",
                new FileInputStream(f),
                ContentType.MULTIPART_FORM_DATA,
                f.getName()
        );

        HttpEntity multipart = builder.build();

        System.setProperty("RESOURCE_PATH", "/src/test/resources/uploads");

        request.setEntity(multipart);
        HttpResponse response = client.execute(request);

        Assert.assertEquals(200, response.getStatusLine().getStatusCode());
    }
}
