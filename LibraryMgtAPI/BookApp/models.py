from django.db import models


class DetailsBook(models.Model):
    BookId = models.AutoField(primary_key=True)
    bookName = models.CharField(max_length=50)
    authorName = models.CharField(max_length=50)
    language = models.CharField(max_length=50)
    genre = models.CharField(max_length=50)

    def __str__(self):
        return self.bookName or ""
