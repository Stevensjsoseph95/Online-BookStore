package is.joseph.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import is.joseph.onlinebookstore.entity.BookCategory;

//This was just to change names of bookCategory to book-category.
@RepositoryRestResource(collectionResourceRel="bookCategory", path="book-category")
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long> {

	//All we need is the class and the initial id related to the class as far as I understand.
	//And everything will be taking cared of by SpringBoot.
}
