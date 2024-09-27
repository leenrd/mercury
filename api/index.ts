import api from "@/server";
import { PORT } from "@/lib/env";

api.listen(PORT, () => {
  console.log(`🍪 Server is running on port ${PORT}`);
});
