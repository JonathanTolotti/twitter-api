import express, {urlencoded} from "express"
import cors from "cors"
import helmet from "helmet";

const app = express();
app.use(helmet());
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(express.json());

//routes

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000");
});