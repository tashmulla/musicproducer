package com.natasha.models;

import org.json.JSONArray;
import org.json.JSONObject;

public class Glossary {

    public Glossary() {

    }

    public JSONObject createMethod(String name, String description) {

        JSONObject method = new JSONObject();
        method.put("name", name);
        method.put("description", description);
        return method;
    }

    public JSONArray addToGlossary(JSONObject method) {

        JSONArray array = new JSONArray();
        array.put(method);
        return array;
    }

    public String convertToString(Glossary glossary) {
        return glossary.toString();
    }
}
