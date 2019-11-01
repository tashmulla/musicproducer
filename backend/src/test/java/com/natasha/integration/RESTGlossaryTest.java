package com.natasha.integration;

import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.junit.Assert;
import org.junit.Test;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

public class RESTGlossaryTest extends BaseTest {

    @Test
    public void glossaryIntegrationTest() throws URISyntaxException, IOException {

        URI uri = builder.setPath("/edits/glossary").setPort(servicePort).build();
        HttpGet request = new HttpGet(uri);
        HttpResponse response = client.execute(request);

        Assert.assertEquals(200, response.getStatusLine().getStatusCode());
    }
}
