class Grocery:
    id: int
    name: str
    carbs: float
    picture: str

    def __init__(self, name, carbs, picture):
        self.name = name
        self.carbs = carbs
        self.picture = picture
