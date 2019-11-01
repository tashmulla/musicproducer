package com.natasha.unit.glossary;

import org.json.simple.parser.ParseException;
import org.junit.Test;
import org.junit.Assert;
import java.io.IOException;
import static com.natasha.utils.GlossaryUtils.getGlossary;

public class GlossaryTest {

    @Test
    public void glossaryJsonTest() throws IOException, ParseException {

        String json = getGlossary();
        Assert.assertNotNull(json);
    }
}
