import { Drawer } from "rsuite";
import { useState } from "react";
import Button from "rsuite/Button";


const getColor = (method) => {
  switch (method) {
    case "get":
      return "green";
    case "post":
      return "blue";
    case "put":
      return "orange";
    case "delete":
      return "red";
    default:
      return "violet";
  }
};
export default function drawer({ locassssslStorage, selectUrl }) {
  const [open, setOpen] = useState(false);

  const handleOpen = (key) => {
    setOpen(true);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)} size={"sm"}  appearance="primary"   >
        Show Recently viewed API's
      </Button>

      <Drawer
        size={"lg"}
        placement={"top"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header>
          <Drawer.Title>Recently viewed</Drawer.Title>
          <Drawer.Actions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
    
          {locassssslStorage
            ? locassssslStorage.map((item, index) => (
                <div key={index}>
                  <Button
                    color={getColor(item.method)}
                    appearance="primary"
                    onClick={() => {
                      selectUrl({type: "selectedUrl", payload: item.url});
                      setOpen(false);
                    }}
                  >
                    
                    {item.url}
                  </Button>
               <br />
              </div>
              ))
            : null}
        </Drawer.Body>
      </Drawer>
    </>
  );
}
