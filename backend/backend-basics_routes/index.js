// import { server } from "./server.js";

// server.listen(…

import { server } from "./server.js";

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server läuft: http://localhost:${PORT}`);
});
