import { redirect } from "next/navigation";

const default_page = "01";

const page = async () => {
    redirect(`/category/${default_page}`)
};

export default page;
