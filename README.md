1. How did you handle state updates when the text changed?
   I used React’s useState hook to track the current text input in the CharacterCounter component. The TextInput component receives a callback prop onTextChange, which is called on every onChange event in the textarea. 

2. What considerations did you make when calculating reading time?
   I calculated reading time based on the average reading speed of 200 words per minute. Each time the text updates, I split the text by whitespace, filtered out empty strings to get the word count, and then divided by 200 to get the reading time in minutes. I also formatted the reading time into minutes and seconds for user-friendly display.

3. How did you ensure the UI remained responsive during rapid text input?
   Since all calculations are simple and done in-memory (counting characters, words, and computing reading time), no heavy computations or API calls are involved. I avoided unnecessary re-renders by keeping each component focused on its responsibilities and passing only the minimal necessary props (stats for StatsDisplay).

4. What challenges did you face when implementing the statistics calculations?
   One challenge was accurately counting words, especially with extra spaces, newlines, or multiple consecutive spaces. I solved this by trimming the text and filtering out empty strings after splitting by whitespace. 
