import React, { useState } from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

const Editor = ({ currentNote, updateNote }) => {
  const [selectedTab, setSelectedTab] = useState("write");

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  // Real-world implementation of the save function that allows file upload my drag and dropping in the textarea
  const save = async function* (data) {
    try {
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append("file", data);

      // Send the file to the server using fetch
      const response = await fetch("https://your-server.com/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }

      // Parse the response to get the uploaded file's URL
      const result = await response.json();
      const fileUrl = result.url; // Assuming the server returns the file URL in the "url" field

      // Yield the URL to be inserted into the markdown
      yield fileUrl;

      // Return true to indicate success
      return true;
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle errors (e.g., show a notification to the user)
      return false;
    }
  };

  return (
    <section className="pane editor">
      <ReactMde
        value={currentNote.body}
        onChange={updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={100}
        minPreviewHeight={100}
        heightUnits="%"
        // childProps={{
        //   writeButton: {
        //     tabIndex: -1,
        //   },
        // }}
        paste={{
          saveImage: save,
        }}
      />
    </section>
  );
};

export default Editor;
