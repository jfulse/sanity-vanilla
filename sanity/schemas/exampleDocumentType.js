import TimeInput from "../inputComponents/TimeInput";

export default {
  name: "exampleDocumentType",
  title: "Example document type",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "time",
      title: "Time",
      type: "string",
      inputComponent: TimeInput,
    },
  ],
};
