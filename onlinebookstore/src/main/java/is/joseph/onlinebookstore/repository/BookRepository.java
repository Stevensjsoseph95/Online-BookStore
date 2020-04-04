package is.joseph.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import is.joseph.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
