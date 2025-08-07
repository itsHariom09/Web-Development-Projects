import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}){
    return(
        <div className="info-box">
            <br /><br />
            <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
                {/* <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                /> */}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city.toUpperCase()}
                    </Typography>
                    <Typography variant="body2" color='text.secondary' component={"span"}>
                    <p>Temperature ={info.temp}&deg;C</p>
                    <p>Minimun Temperature={info.tempMin}&deg;C</p>
                    <p>Maximum Temperature={info.tempMax}&deg;C</p>
                    <p>Humidity ={info.humidity} </p>
                    <p>
                        The weather can be described as <i>{info.weather}</i> and feels like <i>{info.feelsLike}</i> &deg;C.
                    </p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
            
        </div>
    );
}