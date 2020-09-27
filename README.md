# Music Producer

### Details

I thought I'd give it a go at making a web-based music producer, with a Java RESTful backend and a React frontend. I haven't implemented actual audio track editing functionality yet, but I've at least added a few features to start with:

#### Features

- Listing a glossary of terms: This calls an endpoint that returns the data in a glossary JSON file stored in the server
- File upload: I'm really happy with how I've implemented a track upload feature. The user can upload a .mp3 file from their machine and it will get stored on the server using a POST request
- Cool React components: I had a lot of fun putting together the sliders / play, pause buttons / knob rotator components. It would be great to build on this to integrate with an actual track

### Running the application

#### Back-end

The backend is a Maven project, so can be run from the `backend` directory using `mvn compile`, and then `mvn exec:java -Dexec.mainClass=com.natasha.ApplicationServer`.

#### Front-end

The front-end can be run from the `frontend` directory using `npm start`. The application will be available at `localhost:3000`.


