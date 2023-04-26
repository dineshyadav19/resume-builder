import { Document, PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Resume from './Resume';

import './App.css';

function App() {
  return (
    <>
      <h1>My Resume</h1>
      <div className="button-container">
        <PDFDownloadLink
          document={
            <Document>
              <Resume />
            </Document>
          }
          fileName="example.pdf"
          className="download--btn"
          children="Download Resume "
        />
      </div>

      <PDFViewer width="100%" height="600px">
        <Document>
          <Resume />
        </Document>
      </PDFViewer>
    </>
  );
}

export default App;
