type Value = string | boolean;

{
  function mergeObjects(obj1: any, obj2: any) {
    return { ...obj1, ...obj2 };
  }

  const objA = { role: "Grad developer" };
  const objB = { location: "Glasgow" };

  const objC = mergeObjects(objA, objB);
}

{
  function genericMergeObjects<TObj1, TObj2>(obj1: TObj1, obj2: TObj2) {
    return { ...obj1, ...obj2 };
  }

  const objA = { role: "Grad developer" };
  const objB = { location: "Glasgow" };

  const objC = genericMergeObjects<{ role: string }, { location: string }>(
    objA,
    objB
  );
}

{
  function fetchUsers(): UserApi {}
  function fetchArticles(): ArticleApi {}

  // Library author creates the fetch function
  // The app developer uses to point at a particular API
  // At runtime - the API provides the data
  function fetch<ApiType>(): API<ApiType> {}
}

{
  function getElement<ArrayType>(arr: ArrayType[], index: number) {
    return arr[index];
  }

  const myArray = [1, "two", { three: 3 }];
  const element = getElement(myArray, 2);

  const arr2 = [1, 2, 3];
  const element2 = getElement(arr2, 1);
}
