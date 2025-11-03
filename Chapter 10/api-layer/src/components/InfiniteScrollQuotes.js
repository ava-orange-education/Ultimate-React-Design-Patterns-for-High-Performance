import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";
import { fetchQuotesByCursor } from "../api/quoteApi";
import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: 2rem 0;
    max-width: 2xl;
    margin: auto;
`;
const Title = styled.h2`
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 1rem;
`;
const ErrorMessage = styled.p`color: #c53030;`;
const LoadingMessage = styled.p``;
const QuotesContainer = styled.div``;
const QuoteBlock = styled.blockquote`
    position: relative;
    padding: 1rem;
    font-size: 1.5rem;
    font-style: italic;
    border-left: 4px solid #718096;
    background-color: #f7fafc;
    color: #4a5568;
    margin-bottom: 1rem;
`;
const QuoteText = styled.p`margin-bottom: 1rem;`;
const CiteContainer = styled.cite`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const AuthorText = styled.span`
    margin-bottom: 1px;
    font-size: 0.875rem;
    font-style: italic;
    font-weight: bold;
`;

const InfiniteScrollQuotes = () => {
    const { ref: loadMoreRef, inView } = useInView();
    const { data: quotes, isLoading, isFetchingNextPage, isSuccess, isError, fetchNextPage, hasNextPage } = useInfiniteQuery("quotes",
        ({ pageParam = 0 }) => fetchQuotesByCursor(pageParam),
        { getNextPageParam: (lastPage, pages) => lastPage.nextCursor }
    );

    useEffect(() => {
        if (inView && !isFetchingNextPage && hasNextPage) fetchNextPage();
    }, [inView]);

    return (
        <Container>
            <div>
                <Title>Infinite Scroll Quotes</Title>
                {isError ? <ErrorMessage>Problem with fetching quotes</ErrorMessage> : null}
                {isLoading ? <LoadingMessage>Fetching quotes</LoadingMessage> : null}
                {isSuccess ? (
                    <QuotesContainer>
                        <div>
                            <div>
                                {quotes?.pages.map((data) =>
                                    data.quotes.map((quote) => (
                                        <QuoteBlock key={quote.id}>
                                            <QuoteText>"{quote.quote}"</QuoteText>
                                            <CiteContainer>
                                                <div>
                                                    <AuthorText>{quote.author}</AuthorText>
                                                </div>
                                            </CiteContainer>
                                        </QuoteBlock>
                                    ))
                                )}
                                <div ref={loadMoreRef}></div>
                            </div>
                            {isFetchingNextPage ? <span>Loading...</span> : null}{" "}
                        </div>
                    </QuotesContainer>
                ) : null}
            </div>
        </Container>
    );
}
export default InfiniteScrollQuotes