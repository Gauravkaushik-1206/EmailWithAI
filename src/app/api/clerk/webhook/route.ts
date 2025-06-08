import { db } from "@/server/db";

export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        // Process the webhook event here
        // console.log("Received webhook event:", body);

        const emailAddress = body.data?.email_addresses[0].email_address;
        const firstName = body.data?.firstName;
        const lastName = body.data?.lastName;
        const id = body.data?.id;
        const imageUrl = body.data?.imageUrl;
    
        await db.user.create({
            data:{
                emailAddress: emailAddress,
                firstName: firstName,
                lastName: lastName,
                id: id,
                imageUrl: imageUrl,
            }
        });
        console.log("User created successfully:", {
            emailAddress,
            firstName,
            lastName,
            id,
            imageUrl,
        });
        // Return a success response
        return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error processing webhook:", error);
        return new Response(JSON.stringify({ error: "Failed to process webhook" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
        });
    }
}