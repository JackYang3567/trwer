db = new Mongo().getDB('issuetracker');

db.recipes.remove({});

db.recipes.insert([
  {
    "name": "Baked Salmon",
    "ingredients": [
          { "name": "Salmon", "amount": 1, "measurement": "l lb" },
          { "name": "Pine Nuts", "amount": 1, "measurement": "cup" },
          { "name": "Butter Lettuce", "amount": 2, "measurement": "cups" },
          { "name": "Yellow Tail Squash", "amount": 1, "measurement": "med" },
          { "name": "Olive Oil", "amount": 0.5, "measurement": "cup" },
          { "name": "Garlic", "amount": 3, "measurement": "cloves" }
    ],
    "steps": [
        "Preheat the oven to 350 degrees.",
        "Spread the olive oil around a glass baking dish.",
        "Add the salmon, Garlic, and pine nuts to the dish",
        "Bake for 15 minutes.",
        "Add the Butternut Squash and put back in the oven for 30 mins.",
        "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
    ]
  },
  {
      "name": "Fish Tacos",
      "ingredients": [
          { "name": "Whitefish", "amount": 1, "measurement": "l lb" },
          { "name": "cheese", "amount": 1, "measurement": "cup" },
          { "name": "Iceberg Lettuce", "amount": 2, "measurement": "cups" },
          { "name": "Tomatoes", "amount": 2, "measurement": "large"},
          { "name": "Tortillas", "amount": 3, "measurement": "med" }
      ],
      "steps": [
          "Cook the Fish on the Grill until Hot",
          "Place the fish on the 3 tortillas",
          "Top them with lettuce, tomatoes, and cheese"
      ]
  }
]
);

db.recipes.createIndex({ name: 1 });