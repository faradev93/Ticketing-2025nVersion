export function getData() {
  async () => {
    try {
      console.log("gereftam");
      const response = await fetch("http://test.joo.nz/tickets", {
        method: "GET",
      });
      if (response.ok) {
        const json = await response.json();
        setData(json);
      }
    } catch (err) {
      console.log(`Error when fetch getdata:♦ ${err}`);
    }
  };
}
