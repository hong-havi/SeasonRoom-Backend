import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public uno?: number;

  @Column({ unique: true })
  public uid: string;

  @Column()
  public unick: string;

  @Column()
  public email: string;

  @Column()
  public pro_img: string;

  @Column()
  public thumb_img: string;

  @Column()
  public type: string;
}

export default User;
