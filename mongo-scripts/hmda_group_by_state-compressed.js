db.hmda_lar_by_state.drop();

db.hmda_lar.aggregate([
  // { $limit: 1000000 },
  { "$group": {
      "_id": "$89",
      "purchases12": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2012 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 1 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "improvements12": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2012 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 2 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "refinances12": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2012 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 3 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "purchases13": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2013 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 1 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "improvements13": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2013 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 2 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "refinances13": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2013 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 3 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "purchases14": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2014 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 1 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "improvements14": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2014 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 2 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "refinances14": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2014 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 3 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "conv12": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2012 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 1 ] },
                      { "$eq": [ "$b5f", 1 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "fha12": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2012 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 1 ] },
                      { "$eq": [ "$b5f", 2 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "va12": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2012 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 1 ] },
                      { "$eq": [ "$b5f", 3 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "rhs12": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2012 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 1 ] },
                      { "$eq": [ "$b5f", 4 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "conv13": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2013 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 1 ] },
                      { "$eq": [ "$b5f", 1 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "fha13": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2013 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 1 ] },
                      { "$eq": [ "$b5f", 2 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "va13": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2013 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 1 ] },
                      { "$eq": [ "$b5f", 3 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "rhs13": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2013 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 1 ] },
                      { "$eq": [ "$b5f", 4 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "conv14": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2014 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 1 ] },
                      { "$eq": [ "$b5f", 1 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "fha14": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2014 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 1 ] },
                      { "$eq": [ "$b5f", 2 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "va14": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2014 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 1 ] },
                      { "$eq": [ "$b5f", 3 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
      "rhs14": {
          "$sum": {
              "$cond": [
                  { "$and": [
                      { "$eq": [ "$da", 2014 ] },
                      { "$eq": [ "$fb", 1 ] },
                      { "$eq": [ "$809", 1 ] },
                      { "$eq": [ "$b5f", 4 ] },
                      { "$eq": [ "$25", 1 ] },
                      { "$eq": [ "$a14", 1 ] },
                      { "$lte": [ "$eb", 2 ] }
                  ]},
                  1,
                  0
              ]
          }
      },
  }},
  { $out: "hmda_lar_by_state" }
]);