/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
      const formData = await request.formData()
      const user = formData.get("user");
      const password = formData.get("password");

      if (user === "admin"  && password === "password") {
        cookies.set("access", "true", {path: "WebApp\src\routes\dashboard\+page.svelte", sameSite: "strict"});
        throw redirect(302, "/dashboard");
        
      }

      return{
        user,
        message: "User or password is not valid",
      };

      
    },
  };