class API {
  getLoggedInUserID(): UserID;
  getFriendIDs(userID: UserID): UserID[];
  getUserName(userID: UserID): string;
}
