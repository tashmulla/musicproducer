package com.natasha;

import com.natasha.models.Glossary;
import org.json.JSONArray;
import org.json.JSONObject;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.logging.Logger;

@Path("/edits")
public class MusicResource {

    private final static Logger LOGGER = Logger.getLogger(MusicResource.class.getName());

    @GET
    @Path("/glossary")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response glossary() {

        JSONArray array = new JSONArray();

        JSONObject diffusion = new JSONObject();
        diffusion.put("name","diffusion");
        diffusion.put("description","Scattering a sound wave's frequencies");

        JSONObject compression = new JSONObject();
        compression.put("name","compression");
        compression.put("description","Making a larger file smaller to save space");

        JSONObject frequency = new JSONObject();
        frequency.put("name","diffusion");
        frequency.put("description","Number of times per second that a sound wave’s cycle repeats");

        array.put(diffusion);
        array.put(compression);
        array.put(frequency);

        LOGGER.info("Response sent for glossary");
        return Response.status(200).entity(array.toString(1)).build();
    }

}
