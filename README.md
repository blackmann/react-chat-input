# react-chat-input

The missing chat input for React.

![Preview](./assets/preview.png)

- 🌀 Mentions
- 📑 File attachments
- 😊 Emoji picker

## API

```jsx
<ChatInput
  autoCompleteProfiles={autoCompleteProfiles}
  enableFormatting={false}
  files={files}
  onFilesChange={(files) => setFiles(files)}
/>
```

Please look at the [input stories](./src/components/ChatInput.stories.tsx) on the possible props/definitions.

## Development

You can preview the chat input by running `yarn ladle:servce` during development.