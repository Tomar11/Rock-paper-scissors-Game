* {
  margin: 0;
  padding: 0;
  text-align: center;
}

h1 {
  background-color: #081b31;
  color: #fff;
  height: 5rem;
  line-height: 5rem;
}

.choice {
  height: 160px;
  width: 160px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.choice:hover {
    cursor: pointer;
    background-color: #081b31;
}

img {
  height: 150px;
  width: 150px;
  object-fit: cover;
  border-radius: 50%;
}

.choices {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 5rem;
  margin-top: 5rem;
}

.score-board {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin-top: 2rem;
  gap: 5rem;
}

#user-score,
#AI-score {
  font-size: 3rem;
}

.massage-container {
  margin-top: 4rem;
}

#msg {
  background-color: #081b31;
  color: #fff;
  font-size: 2rem;
  display: inline;
  padding: 1rem;
  border-radius: 1rem;
}