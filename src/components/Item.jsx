import ContentList from "./ContentList";
import moment from 'moment'

const Item = (props) => {
    const categoryIdFnc = () => {
        switch(props.value.categoryId){
            case 0 : 
            return '전체';
            case 1 : 
            return '돼지고기';
            case 2 : 
            return '닭고기';
            case 3 : 
            return '당뇨';
            case 4 : 
            return '땅콩';
            case 5 : 
            return '카페인';
            case 6 : 
            return '복숭아';
            case 7 : 
            return '게';
            case 8 : 
            return '갑각류';
            case 9 : 
            return '새우';
            case 10 : 
            return '오징어';
        }
    }
    const contentTypeFnc = () => {
        switch(props.value.contentType){
            case 0 : 
            return '전체';
            case 1 : 
            return '질문';
            case 2 : 
            return '노하우';
            case 3 : 
            return '넋두리';
            case 4 : 
            return '공동구매';
            case 5 : 
            return '경험담';
            case 6 : 
            return '자유';
        }
    }
    
    const timeFnc = () => {
        return moment(props.value.createdDate).format('YYYY-MM-DD HH:MM:SS')
    }
    return(
        <li>
            <div className="category-id">
                카테고리명: {categoryIdFnc()}
            </div>
            <div className="content-type">
                콘텐츠타입: {contentTypeFnc()}
            </div>
            <div className="post-content">
                <a href="#">더보기</a>
                <h2>본문</h2>
                {props.value.postContent}
            </div>
            <div className="bottom-wrap">
                <div className="author-name">
                    작성자 : {props.value.authorName}
                </div>
                <div className="created-date">
                    작성일 : {timeFnc()}
                </div>
            </div>
        </li>        
    )
}

export default Item