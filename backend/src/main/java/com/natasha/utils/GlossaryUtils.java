package com.natasha.utils;

import com.google.gson.Gson;
import com.natasha.models.Glossary;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public class GlossaryUtils {

    public static JSONArray glossaryJson() throws IOException, ParseException {

        JSONParser parser = new JSONParser();
        Path currentDir = Paths.get("");

        JSONArray glossaryJson = (JSONArray) parser.parse(new FileReader(currentDir.toAbsolutePath()+"/src/main/resources/glossary.json"));

        return glossaryJson;
    }

    public static String getGlossary() throws IOException, ParseException {

        JSONArray glossary = glossaryJson();

        List<Glossary> glossaryList = new ArrayList<Glossary>();

        for (Object g : glossary) {
            JSONObject technique = (JSONObject) g;

            String name = (String) technique.get("name");
            String description = (String) technique.get("description");
            Glossary item = new Glossary(name, description);
            glossaryList.add(item);
        }

        String json = new Gson().toJson(glossaryList);

        return json;
    }

}
