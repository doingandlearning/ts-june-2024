type NewType = string;

interface NewInterface {}

{
  type VALID_API_VALUE = string | number | boolean;

  let result: VALID_API_VALUE = "";

  interface API_RESULT {
    results: number;
    items: VALID_API_VALUE[];
    other_items: Array<VALID_API_VALUE>;
  }

  type BirdType = {
    wings: 2;
  };

  interface BirdInterface {
    wings: 2;
  }

  const bird1: BirdType = { wings: 2 };
  const bird2: BirdInterface = { wings: 2 };
  const bird3: BirdType = bird2; // Structural typing!
  // Duck typed
  // If it looks like a duck, sounds like a duck, acts like a duck - it is a duck!

  type Owl = BirdType & { nocturnal: true };
  type Robin = BirdType & { nocturnal: false };

  interface Chicken extends BirdType {
    colourful: false;
    flies: false;
  }

  interface Peacock extends BirdInterface {
    colourful: true;
    flies: false;
  }

  interface Chicken {
    laysEggs: true;
  }

  let peacock: Peacock = { colourful: false };

  let chicken: Chicken = {};
  let owl: Owl = {};
}

// https://ts-error-translator.vercel.app/

{
  let name = "Kevin";
  const name1 = "Kevin";
}
