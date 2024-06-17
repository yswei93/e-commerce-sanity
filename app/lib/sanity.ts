import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: 'zyccmrsk',
    dataset: 'production',
    apiVersion: '2024-06-17',
    useCdn: true,
});

export function urlFor(source: any) {
    const builder = imageUrlBuilder(client);
    return builder.image(source);
}