import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col ,Button } from 'react-bootstrap';
import CoursesData from '../../CardDatas'

export default function MainCourse() {

    let params = useParams()

    let mainCouseData = CoursesData.find(course => course.id == params.courseID)

    console.log(mainCouseData);


    return (
        <Container className="mt-5">
            <h3 style={{textAlign:"right"}}>{mainCouseData.title}</h3><br/>
            <Row>
                <Col style={{textAlign:"right"}}>
                    <p>تومان{mainCouseData.price}
                    </p>
                    <br/><br/>
                   <p>
                   پــروژه مــحور بودن دوره هــــا
                  <br/>
                    پشتیبـــانی دائــــمی محصولات
                    <br/>
                    تضمین کیــفیت کلیـه محصولات
                    </p> <br/><br/><br/><br/><br/><br/>
                    <div >
                       <Button  variant="success">شما دانشجوی این دوره اید</Button><span>  </span>
                       <Button>دیدن ویدیوها</Button>
                    </div>
                    
                    
                </Col>
                <Col >
                   
                    <img src={mainCouseData.img} style={{width: '100%', height: '300px'}}/>
                </Col>
            </Row>
            <Row>
              <Col style={{textAlign:"right"}}>
                <br/>
                    <p>{mainCouseData.des}</p>
              </Col>

            </Row>
        </Container>
    )
}
