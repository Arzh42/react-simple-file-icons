# react-simple-file-icons

React simple file icons is a little library with offer a variety of icons for files and also allow you to simply create your own icons for your own types of files

## Installation

```javascript
npm install react-simple-file-icons
```

```javascript
yarn add react-simple-file-icons
```

## Documentation

A storybook is available to let you find the icons you need and to help you generate your own icon with the CustomIcon

https://arzh42.github.io/react-simple-file-icons

## Usage

### Select a specific icon

You can select a specific icon and import it directly in your component 

```javascript
import PDFIcon from "react-simple-file-icons"

const YourComponent = () => {
  return <PDFIcon width={100} height={100} />
}
```


### Using a mime type

You can select an icon based on the mime type of your file

```javascript
import MimeTypeIcon from "react-simple-file-icons"

const YourComponent = () => {
  return <MimeTypeIcon mimeType="application/pdf" width={100} height={100} />
}
```

### Creating your own icon

You can easily specify your own icon by entering a set of properties

```javascript
import CustomIcon from "react-simple-file-icons"

const YourComponent = () => {
  return <CustomIcon 
    globalStyle={{
      width: 100,
      height: 100,
    }}
    backgroundColor="black"
    textColor="white"
    fontFamily="Comic Sans"
    fontWeight="bold"
    contentText="FILE"
    cornerColor="blue" 
  />
}
```
