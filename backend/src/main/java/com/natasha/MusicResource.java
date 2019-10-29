package com.natasha;

import com.natasha.models.Glossary;
import com.natasha.utils.GlossaryUtils;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.simple.parser.ParseException;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.util.logging.Logger;

@Path("/edits")
public class MusicResource {

    private final static Logger LOGGER = Logger.getLogger(MusicResource.class.getName());

    @GET
    @Path("/glossary")
    @Produces(MediaType.APPLICATION_JSON)
    public Response test() throws IOException, ParseException {

        String glossaryList = GlossaryUtils.getGlossary();
        LOGGER.info("/edits/glossary");
        return Response.status(200).entity(glossaryList).build();
    }
}
