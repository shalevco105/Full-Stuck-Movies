import { ApiUser } from "../models/apiUserModel";
import RequestHandler from "../handlers/requestHandler";

const USERS_URL = process.env.USERS_URL || 'https://jsonplaceholder.typicode.com/users'; // Provide a default in case it's not set

class ApiUserService {
  static async getUserById(id: number): Promise<ApiUser | null> {
    return await RequestHandler.sendRequest<ApiUser>(
        `${USERS_URL}/${id}`,
        "GET"
      );
  }
}

export default ApiUserService;