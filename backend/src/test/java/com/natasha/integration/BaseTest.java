package com.natasha.integration;

import org.apache.http.client.HttpClient;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.webapp.WebAppContext;
import org.junit.Before;

import java.io.IOException;
import java.net.ServerSocket;

/**
 * Base Test for com.natasha.integration tests
 */
public class BaseTest {

    protected static Server server = null;
    protected static PoolingHttpClientConnectionManager connManager = new PoolingHttpClientConnectionManager();
    protected static HttpClient client;
    protected static int servicePort;
    protected URIBuilder builder = new URIBuilder().setScheme("http").setHost("localhost");

    @Before
    public void setupConn() throws Exception {

        servicePort = findRandomPort();
        System.out.println(servicePort);
        startServer();
        connManager.setDefaultMaxPerRoute(100);
        connManager.setMaxTotal(200);
        client = HttpClients.custom()
                .setConnectionManager(connManager)
                .setConnectionManagerShared(true)
                .build();
    }

    public static Integer findRandomPort() throws IOException {
        try (ServerSocket socket = new ServerSocket(0)) {
            return socket.getLocalPort();
        }
    }

    public static void startServer() throws Exception {

        if (server == null) {

            Server server = new Server(servicePort);

            WebAppContext context = new WebAppContext();
            context.setDescriptor("./src/main/webapp/WEB-INF/web.xml");
            context.setResourceBase("./src/main/webapp");
            context.setContextPath("/");
            context.setParentLoaderPriority(true);

            server.setHandler(context);
            server.start();
        }
    }
}

