export interface UserProfile {
  result_code: number;
  result_data: {
    user_key: string;
    profile_image_url: string | undefined;
    name: string;
    is_app_member: boolean;
    message_allowed: boolean;
  };
}
