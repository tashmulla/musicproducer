package com.natasha;

import com.natasha.utils.GlossaryUtils;
import org.json.simple.parser.ParseException;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import org.jboss.resteasy.plugins.providers.multipart.MultipartFormDataInput;

import javax.ws.rs.core.Response;
import java.io.IOException;
import java.util.logging.Logger;

import static com.natasha.utils.FileUtils.*;

@Path("/edits")
public class MusicResource {

    private final static Logger LOGGER = Logger.getLogger(MusicResource.class.getName());

    @GET
    @Path("/glossary")
    @Produces(MediaType.APPLICATION_JSON)
    public Response glossary() throws IOException, ParseException {

        String glossaryList = GlossaryUtils.getGlossary();
        LOGGER.info("/edits/glossary");
        return Response.status(200).entity(glossaryList).build();
    }

    @POST
    @Path("/upload")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Produces(MediaType.APPLICATION_JSON)
    public Response upload(MultipartFormDataInput file) {

        String resourcesPath = "/src/main/resources/uploads";
        String filename = uploadFile(file);

        return Response.status(200)
                .entity("Uploaded file: " + filename)
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Credentials", "true")
                .header("Access-Control-Allow-Headers",
                        "origin, content-type, accept, authorization")
                .header("Access-Control-Allow-Methods",
                        "GET, POST, PUT, DELETE, OPTIONS, HEAD")
                .build();
    }
}
