import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
/**
 *
 *  Entity 작성
 *  참고 : https://typeorm.io/entities#column-types-for-postgres
 *
 */

@Entity()
class User {
  @PrimaryGeneratedColumn() // Key를 지정하는 데코레이션
  public UserIdx?: number;

  @Column() // 안에 컬럼 자료형 표현 가능 text or { length: 30 } or deciaml, { precision: 10, scale: 0 }
  public Name: string;

  @Column()
  public Nick: string;

  @Column()
  public Email: string;

  @Column()
  public Profile_img: string;

  @Column()
  public Thumb_img: string;

  @Column()
  public Account_Uid: string;

  @Column()
  public Account_Type: string;

  @Column()
  public LoginCount: number;

  @Column()
  public IsAccess: boolean;

  @Column()
  public LastLoginDatetime: Date;

  @Column()
  public UpdateDatetime: Date;

  @Column()
  public CreateDatetime: Date;
}

export default User;
