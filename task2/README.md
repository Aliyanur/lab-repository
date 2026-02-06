## Lad 04-TASK2
In task2 I refactores ArticleManager and moved the form part into a new component called AddArticle. Before, title, summary inputs and Add button was inside ArticleManager and make it too big.

AddArticle receive props like title, summary and event handlers from ArticleManager. It does not have own state, it only display the form. ArticleManager still manage the state and logic.

This refactoring make the code more clean and easier to understand, and follow Chapter 5 principles.