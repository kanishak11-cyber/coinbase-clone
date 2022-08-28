import { SanityClient } from "@sanity/client";

export const client = SanityClient({
    projectId: 'rftnxb8h',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2022-08-25',
    token: process.env.SANITY_TOKEN,
});
