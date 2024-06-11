# Good Movies 🕶️: Movie Recommendation Site
Good Movies is a movie recommendation site with a Next.js 14 frontend and a Flask backend. User data, including likes, dislikes, and recommendation details, are stored in Firebase. The backend utilises a content-based recommender system to adjust recommendations based on a user's preferences, ensuring personalized movie suggestions.

## Frontend
Movie details fetched from the TMDB API are displayed using **Flip Cards** to better utilise viewport space. Each card provides options to add the movie to the watchlist or watch the trailer for the corresponding movie. The intuitive design ensures a seamless user experience.

<img src="https://github.com/Venkatesh360/good-movies-frontend/blob/main/screenshots/image.png" alt="Alt text" style="width: 90%;">

## Trailer Page
<table>
  <tr>
    <td>
      <img src="https://github.com/Venkatesh360/good-movies-frontend/blob/main/screenshots/trailer_page1.png" alt="Alt text" width="500">
    </td>
    <td valign="top">
      <img src="https://github.com/Venkatesh360/good-movies-frontend/blob/main/screenshots/trailer_page2.png" alt="Alt text" width="500">
    </td>
  </tr>
</table>




## Watchlist
Users can maintain a watchlist to keep track of movies they plan to watch. This feature helps users organize their movie-watching schedule and ensures they don't miss any recommendations.

<img src="https://github.com/Venkatesh360/good-movies-frontend/blob/main/screenshots/watchlist2.png?raw=true" alt="Alt text" style="width: 90%;">

## Recommendations
Recommendation Cards include options to like or dislike a movie. The recommendation data is adjusted accordingly, enhancing the accuracy of future suggestions. This interactive feedback loop makes the recommendation engine more effective over time.

<img src="https://github.com/Venkatesh360/good-movies-frontend/blob/main/screenshots/recocard2.png?raw=true" alt="Alt text" style="width: 90%;">

### User Interaction
* **Likes and Dislikes:** By liking or disliking movies, users provide valuable feedback to the recommendation system.
* **Content-Based Filtering:** The system suggests movies similar to those the user has liked, improving the relevance of recommendations.
  
## Technology Stack
* **Frontend**: Next.js 14
* **Backend**: Flask
* **Database**: Firebase
* **API**: TMDB API for movie details

  
## Getting Started
To run the project locally:

### Frontend

1. Clone the repository:
    ```yaml
    git clone https://github.com/Venkatesh360/good-movies-frontend.git
    ```

2. Navigate to the project directory:
    ```yaml
    cd good-movies-frontend
    ```

3. Install dependencies:
    ```yaml
    npm install
    ```

4. Start the development server:
    ```yaml
    npm run dev
    ```

 ## [ Backend ](https://github.com/Venkatesh360/pyFire)

1. Clone the backend repository:
    ```yaml
    git clone https://github.com/Venkatesh360/pyFire.git
    ```

2. Navigate to the project directory:
    ```yaml
    cd pyFire
    ```

3. Install dependencies:
    ```yaml
    pip install -r requirements.txt
    ```

4. Run the Flask server:
    ```yaml
    flask run
    ```

## project_requirements:
  ### frontend:
    - Firebase configuration file
  ### backend:
    - Firebase Admin `configuration.json` file
    - Cosine similarity matrix file (saved as a pickle file within the `pickle` folder)

