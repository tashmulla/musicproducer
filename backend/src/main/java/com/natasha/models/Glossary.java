package com.natasha.models;

import org.json.JSONArray;
import org.json.JSONObject;

public class Glossary {

    public String name;
    public String description;

    public Glossary(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public String getGlossaryName() {
        return name;
    }

    public void setGlossaryName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

