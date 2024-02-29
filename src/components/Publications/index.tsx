import { Post, PostsContainer, PublicationsContainer, PublicationsForm, PublicationsHeader } from "./styles";

export function Publications() {
    return (
        <PublicationsContainer>
            <PublicationsHeader>
                <h1>Publicações</h1>
                <span>6 publicações</span>
            </PublicationsHeader>
            <PublicationsForm>
                <input type="text" placeholder="Buscar conteúdo" />
            </PublicationsForm>

            <PostsContainer>
                <Post>
                    <header>
                        <h1>JavaScript data types and data structures</h1>
                        <span>Há 1 dia</span>
                    </header>

                    <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

                        Dynamic typing
                        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

                        let foo = 42; // foo is now a number
                        foo = 'bar'; // foo is now a string
                        foo = true; // foo is now a boolean</p>
                </Post>
                <Post>
                    <header>
                        <h1>JavaScript data types and data structures</h1>
                        <span>Há 1 dia</span>
                    </header>

                    <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

                        Dynamic typing
                        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

                        let foo = 42; // foo is now a number
                        foo = 'bar'; // foo is now a string
                        foo = true; // foo is now a boolean</p>
                </Post>
                <Post>
                    <header>
                        <h1>JavaScript data types and data structures</h1>
                        <span>Há 1 dia</span>
                    </header>

                    <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

                        Dynamic typing
                        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

                        let foo = 42; // foo is now a number
                        foo = 'bar'; // foo is now a string
                        foo = true; // foo is now a boolean</p>
                </Post>
            </PostsContainer>
        </PublicationsContainer>
    )
}