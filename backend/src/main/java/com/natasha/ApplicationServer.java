package com.natasha;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.webapp.WebAppContext;
import java.util.logging.Logger;

public class ApplicationServer {

    private static Logger LOGGER = Logger.getLogger(ApplicationServer.class.getName());

    public static void main(String[] args) throws Exception {
        LOGGER.info("Starting up server...");
        startServer();
        LOGGER.info("Successfully started server...");
    }

    private static void startServer() throws Exception {

        Server server = new Server(7090);

        WebAppContext context = new WebAppContext();
        context.setDescriptor("./src/main/webapp/WEB-INF/web.xml");
        context.setResourceBase("./src/main/webapp");
        context.setContextPath("/");
        context.setParentLoaderPriority(true);

        server.setHandler(context);
        server.start();
    }
}
