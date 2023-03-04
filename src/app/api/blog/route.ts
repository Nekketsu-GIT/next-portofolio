import Butter from "buttercms";
import { NextRequest } from "next/server";

const butter = Butter("3af08233eb3984f6590f8cd06f6eca9b86e95c42");

export async function GET(request: Request) {


   try {
      const response = await butter.post.list({page: 1, page_size: 10});
      return {
         status: 200,
         body: JSON.stringify(response.data)
      }
   }
    catch (error) {
        return {
             status: 500,
             body: JSON.stringify(error)
        }
    }

  }