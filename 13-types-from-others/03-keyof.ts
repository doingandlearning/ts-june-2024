{
  type APIResponse = {
    user: {
      userId: string;
      friendList: {
        readonly count?: number;
        friends?: {
          firstName?: string;
          lastName?: string;
        }[];
      };
    };
  };

  type ResponseKeys = keyof APIResponse["user"];

  type FriendList = {
    readonly [K in keyof APIResponse["user"]["friendList"]]?: APIResponse["user"]["friendList"][K];
  };

  type OptionalFriends = Readonly<Partial<APIResponse["user"]["friendList"]>>;
}
