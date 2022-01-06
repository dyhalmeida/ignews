import { Stripe } from "stripe";
import { version } from "../../package.json";

export const stripe = new Stripe(
    process.env.STRIPE_API_KEY, // SECRET_KEY do STRIPE, declarando dentro do arquivo .env.local, na raiz do projeto
    {
        apiVersion: "2020-08-27",
        appInfo: {
            name: "Ignews",
            version
        }
    }
);